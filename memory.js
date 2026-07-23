class MemoryManager {

    constructor() {
        this.storageKey = "babar_ai_memory";
        this.history = this.loadMemory();
    }

    loadMemory() {

        const data = localStorage.getItem(this.storageKey);

        if (data) {
            return JSON.parse(data);
        }

        return [];
    }

    saveMemory(user, ai) {

        this.history.push({
            user: user,
            ai: ai,
            time: new Date().toLocaleString()
        });

        localStorage.setItem(
            this.storageKey,
            JSON.stringify(this.history)
        );
    }

    getMemory() {
        return this.history;
    }

    clearMemory() {

        this.history = [];

        localStorage.removeItem(this.storageKey);

    }

}

const memory = new MemoryManager();
