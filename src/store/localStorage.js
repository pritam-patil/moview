class LocalStorageManager {
  // Store instances by key
  static instances = new Map();

  constructor(key) {
    if (!key) {
      throw new Error("Storage key is required");
    }

    // Return existing instance for this key if it exists
    if (LocalStorageManager.instances.has(key)) {
      return LocalStorageManager.instances.get(key);
    }

    this.storageKey = key;
    // Store this instance
    LocalStorageManager.instances.set(key, this);

    // Optional: Make constructor return the instance
    Object.freeze(this);
  }

  // Static factory method (recommended)
  static getInstance(key) {
    if (!LocalStorageManager.instances.has(key)) {
      LocalStorageManager.instances.set(key, new LocalStorageManager(key));
    }
    return LocalStorageManager.instances.get(key);
  }

  // Set data
  set(data) {
    try {
      const dataToStore =
        typeof data === "object" ? JSON.stringify(data) : String(data);
      localStorage.setItem(this.storageKey, dataToStore);
      return true;
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      return false;
    }
  }

  // Get data
  get() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data === null) return null;

      // Try to parse as JSON, return as string if fails
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return null;
    }
  }

  // Remove data
  remove() {
    try {
      localStorage.removeItem(this.storageKey);
      return true;
    } catch (error) {
      console.error("Error removing from localStorage:", error);
      return false;
    }
  }

  // Check if data exists
  hasData() {
    return localStorage.getItem(this.storageKey) !== null;
  }

  // Clear all instances (optional, for cleanup)
  static clearAllInstances() {
    LocalStorageManager.instances.clear();
  }
}

// Usage
export default LocalStorageManager;
