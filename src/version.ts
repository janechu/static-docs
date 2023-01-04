interface Versions {
    /**
     * Available versions
     */
    version: Array<string>;
}

export interface VersionConfig {
    /**
     * Versions for each package
     */
    [key: string]: Versions;
}
