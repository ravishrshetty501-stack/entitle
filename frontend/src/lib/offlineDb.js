// Local IndexedDB Storage Engine for ENTITLE Offline-First Operations
// Handles offline scheme browsing, document vault metadata, encrypted files, and voice logs.

const DB_NAME = "EntitleOfflineDB";
const DB_VERSION = 2;

let dbInstance = null;

export function openOfflineDB() {
    if (dbInstance) return Promise.resolve(dbInstance);

    return new Promise((resolve, reject) => {
        const req = indexedDB.open(DB_NAME, DB_VERSION);

        req.onupgradeneeded = (event) => {
            const db = event.target.result;

            // 1. Schemes store
            if (!db.objectStoreNames.contains("schemes")) {
                const schemeStore = db.createObjectStore("schemes", { keyPath: "id" });
                schemeStore.createIndex("category", "category", { unique: false });
                schemeStore.createIndex("state", "state", { unique: false });
                schemeStore.createIndex("level", "level", { unique: false });
                schemeStore.createIndex("sdg", "sdg", { unique: false });
            }

            // 2. Vault documents store
            if (!db.objectStoreNames.contains("vault_documents")) {
                const vaultStore = db.createObjectStore("vault_documents", { keyPath: "id" });
                vaultStore.createIndex("category", "category", { unique: false });
                vaultStore.createIndex("uploadDate", "uploadDate", { unique: false });
            }

            // 3. Voice Assistant conversation history
            if (!db.objectStoreNames.contains("voice_history")) {
                const voiceStore = db.createObjectStore("voice_history", { keyPath: "id", autoIncrement: true });
                voiceStore.createIndex("timestamp", "timestamp", { unique: false });
            }

            // 4. Sync metadata (lastSync, packs, version)
            if (!db.objectStoreNames.contains("sync_meta")) {
                db.createObjectStore("sync_meta", { keyPath: "key" });
            }
        };

        req.onsuccess = (event) => {
            dbInstance = event.target.result;
            resolve(dbInstance);
        };

        req.onerror = (event) => {
            console.error("IndexedDB open error:", event.target.error);
            reject(event.target.error);
        };
    });
}

// -------------------------------------------------------------
// SCHEMES
// -------------------------------------------------------------

export async function saveSchemesToOfflineDB(schemes) {
    if (!Array.isArray(schemes) || schemes.length === 0) return;
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(["schemes", "sync_meta"], "readwrite");
        const store = tx.objectStore("schemes");
        for (const s of schemes) {
            store.put(s);
        }
        const metaStore = tx.objectStore("sync_meta");
        metaStore.put({ key: "last_sync", value: new Date().toISOString(), count: schemes.length });

        tx.oncomplete = () => resolve(schemes.length);
        tx.onerror = (e) => reject(e.target.error);
    });
}

export async function getAllOfflineSchemes() {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("schemes", "readonly");
        const store = tx.objectStore("schemes");
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = (e) => reject(e.target.error);
    });
}

export async function getOfflineSchemeById(id) {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("schemes", "readonly");
        const store = tx.objectStore("schemes");
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = (e) => reject(e.target.error);
    });
}

// -------------------------------------------------------------
// DOCUMENT VAULT
// -------------------------------------------------------------

export async function saveVaultDocumentToDB(doc) {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("vault_documents", "readwrite");
        const store = tx.objectStore("vault_documents");
        store.put(doc);
        tx.oncomplete = () => resolve(doc);
        tx.onerror = (e) => reject(e.target.error);
    });
}

export async function getAllVaultDocumentsFromDB() {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("vault_documents", "readonly");
        const store = tx.objectStore("vault_documents");
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = (e) => reject(e.target.error);
    });
}

export async function getVaultDocumentById(id) {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("vault_documents", "readonly");
        const store = tx.objectStore("vault_documents");
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = (e) => reject(e.target.error);
    });
}

export async function deleteVaultDocumentFromDB(id) {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("vault_documents", "readwrite");
        const store = tx.objectStore("vault_documents");
        store.delete(id);
        tx.oncomplete = () => resolve(true);
        tx.onerror = (e) => reject(e.target.error);
    });
}

// -------------------------------------------------------------
// VOICE ASSISTANT HISTORY
// -------------------------------------------------------------

export async function saveVoiceMessageToDB(message) {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("voice_history", "readwrite");
        const store = tx.objectStore("voice_history");
        store.add({
            ...message,
            timestamp: message.timestamp || new Date().toISOString()
        });
        tx.oncomplete = () => resolve(true);
        tx.onerror = (e) => reject(e.target.error);
    });
}

export async function getVoiceHistoryFromDB() {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("voice_history", "readonly");
        const store = tx.objectStore("voice_history");
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result || []);
        req.onerror = (e) => reject(e.target.error);
    });
}

export async function clearVoiceHistoryFromDB() {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("voice_history", "readwrite");
        const store = tx.objectStore("voice_history");
        store.clear();
        tx.oncomplete = () => resolve(true);
        tx.onerror = (e) => reject(e.target.error);
    });
}

// -------------------------------------------------------------
// METADATA & STORAGE
// -------------------------------------------------------------

export async function getSyncMeta(key) {
    const db = await openOfflineDB();
    return new Promise((resolve) => {
        const tx = db.transaction("sync_meta", "readonly");
        const store = tx.objectStore("sync_meta");
        const req = store.get(key);
        req.onsuccess = () => resolve(req.result ? req.result.value : null);
        req.onerror = () => resolve(null);
    });
}

export async function setSyncMeta(key, value) {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction("sync_meta", "readwrite");
        const store = tx.objectStore("sync_meta");
        store.put({ key, value });
        tx.oncomplete = () => resolve(true);
        tx.onerror = (e) => reject(e.target.error);
    });
}

export async function getStorageEstimate() {
    if (navigator.storage && navigator.storage.estimate) {
        const est = await navigator.storage.estimate();
        const usageMB = ((est.usage || 0) / (1024 * 1024)).toFixed(2);
        const quotaMB = ((est.quota || 0) / (1024 * 1024)).toFixed(2);
        const percent = est.quota ? Math.min(100, Math.round((est.usage / est.quota) * 100)) : 0;
        return { usageMB, quotaMB, percent, rawUsage: est.usage, rawQuota: est.quota };
    }
    return { usageMB: "0.00", quotaMB: "100.00", percent: 0, rawUsage: 0, rawQuota: 104857600 };
}

export async function clearAllLocalData() {
    const db = await openOfflineDB();
    return new Promise((resolve, reject) => {
        const tx = db.transaction(["schemes", "vault_documents", "voice_history", "sync_meta"], "readwrite");
        tx.objectStore("schemes").clear();
        tx.objectStore("vault_documents").clear();
        tx.objectStore("voice_history").clear();
        tx.objectStore("sync_meta").clear();
        tx.oncomplete = () => resolve(true);
        tx.onerror = (e) => reject(e.target.error);
    });
}

