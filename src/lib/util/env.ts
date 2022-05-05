
export const getEnv = (key: string): string | undefined =>
    process.env[key];

export const getEnvString = (key: string, defaultValue: string = ''): string =>
    getEnv(key) || defaultValue;

export const getEnvNumber = (key: string, defaultValue: number = 0): number =>
    Number(getEnv(key)) || defaultValue;

export const getEnvBoolean = (key: string): boolean =>
    getEnv(key) === 'true';

export const getEnvStringRequired = (key: string): string => {
    const value = getEnv(key);
    if (typeof value === 'undefined')
        throw new Error(`Required variable ${key} is not provided.`);
    return value;
}
