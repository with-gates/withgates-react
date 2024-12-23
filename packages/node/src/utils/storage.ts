import fs from "fs/promises";
import path from "path";

const STORAGE_DIR = "./.cache/gates";

interface StoredGate {
  id: string;
  value: any;
}

export class GateStorage {
  private static async ensureStorageDir() {
    try {
      await fs.mkdir(STORAGE_DIR, { recursive: true });
    } catch (error) {}
  }

  static async saveGates(storeName: string, gates?: Record<string, boolean>) {
    if (!gates) {
      return;
    }

    await this.ensureStorageDir();

    const storedGates = Object.entries(gates).map(([key, value]) => ({
      id: key,
      value,
    }));

    await fs.writeFile(
      path.join(STORAGE_DIR, `${storeName}.json`),
      JSON.stringify(storedGates)
    );
  }

  static async loadGates(
    storeName: string
  ): Promise<Record<string, any> | null> {
    try {
      await this.ensureStorageDir();
      const data = await fs.readFile(
        path.join(STORAGE_DIR, `${storeName}.json`),
        "utf-8"
      );
      const gates = JSON.parse(data) as StoredGate[];

      return gates.reduce(
        (acc, gate) => ({
          ...acc,
          [gate.id]: gate.value,
        }),
        {}
      );
    } catch (error) {
      return null;
    }
  }

  static async cleanup(storeName: string) {
    try {
      const data = await fs.readFile(
        path.join(STORAGE_DIR, `${storeName}.json`),
        "utf-8"
      );
      const gates = JSON.parse(data) as StoredGate[];

      await fs.writeFile(
        path.join(STORAGE_DIR, `${storeName}.json`),
        JSON.stringify(gates)
      );
    } catch (error) {
      // File doesn't exist or other error
    }
  }
}
