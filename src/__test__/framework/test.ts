export type TestCase = {
    title: string;
    fn: () => void;
};

export function test(title: TestCase["title"], testFn: TestCase["fn"]) {
    return {
        title,
        fn: () => {
            const testCase = `  - ${title}.`;
            console.log(testCase);
            testFn();
        },
    } as TestCase;
}
