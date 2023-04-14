export default {
    setupFilesAfterEnv: ["./jest-setup.ts"],
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testMatch: ["**/src/**/*.test.[jt]s?(x)"]
};
