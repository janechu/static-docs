interface Versions {
    /**
     * Available versions
     */
    versions: Array<string>;
}

export interface VersionConfig {
    /**
     * Versions for each package
     */
    [key: string]: Versions;
}
