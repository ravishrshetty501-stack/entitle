// Local Client-Side AES-GCM 256-bit Encryption for ENTITLE Document Vault
// Complies with strict offline-first zero-knowledge data privacy requirements.

const KEY_STORAGE_NAME = "entitle_vault_key_v1";

async function getOrCreateVaultKey() {
    let keyJwkStr = localStorage.getItem(KEY_STORAGE_NAME);
    if (keyJwkStr) {
        try {
            const jwk = JSON.parse(keyJwkStr);
            return await window.crypto.subtle.importKey(
                "jwk",
                jwk,
                { name: "AES-GCM", length: 256 },
                true,
                ["encrypt", "decrypt"]
            );
        } catch (e) {
            console.warn("Failed to import existing vault key, generating fresh one", e);
        }
    }

    const newKey = await window.crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
    const exportedJwk = await window.crypto.subtle.exportKey("jwk", newKey);
    localStorage.setItem(KEY_STORAGE_NAME, JSON.stringify(exportedJwk));
    return newKey;
}

/**
 * Encrypts an ArrayBuffer or Blob using AES-GCM with a random 12-byte IV.
 */
export async function encryptBuffer(dataBuffer) {
    const key = await getOrCreateVaultKey();
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const encrypted = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        dataBuffer
    );
    return {
        iv: Array.from(iv),
        cipherBuffer: encrypted
    };
}

/**
 * Decrypts an AES-GCM encrypted ArrayBuffer using the stored vault key and IV.
 */
export async function decryptBuffer(cipherBuffer, ivArray) {
    const key = await getOrCreateVaultKey();
    const iv = new Uint8Array(ivArray);
    return await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        cipherBuffer
    );
}

/**
 * Helper to encrypt a File or Blob and return encrypted payload with mimeType.
 */
export async function encryptFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    const { iv, cipherBuffer } = await encryptBuffer(arrayBuffer);
    return {
        iv,
        cipherBuffer,
        mimeType: file.type || "application/octet-stream",
        size: file.size,
        name: file.name
    };
}

/**
 * Helper to decrypt a stored cipherBuffer back into a standard Blob.
 */
export async function decryptToFileBlob(cipherBuffer, ivArray, mimeType = "application/pdf") {
    const decryptedBuffer = await decryptBuffer(cipherBuffer, ivArray);
    return new Blob([decryptedBuffer], { type: mimeType });
}

/**
 * Securely clear the vault encryption key on logout
 */
export function purgeVaultKey() {
    localStorage.removeItem(KEY_STORAGE_NAME);
}

