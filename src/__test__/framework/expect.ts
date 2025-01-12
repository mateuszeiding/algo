type Expect = {
    not?: Expect,
    toExist: () => void,
    toBe: (expected: unknown) => void,
}

export function expect(actual: unknown, not: boolean = false): Expect {
    const isNegated = (checkResult: boolean, addText: string) => {
        if (not) {
            return {
                val: !checkResult,
                text: addText,
            }
        } else {
            return {
                val: checkResult,
                text: " ", }
        }
    }

    function format(val: unknown) {
        if (typeof val === "string") {
            return `"${val}"`;
        }
        if (Array.isArray(val)) {
            return "[]";
        }
        if (typeof val === "object") {
            return "{}";
        }

        return val;
    }

    return {
        ...(!not && {not: expect(actual, true)}),
        toExist() {
            const { val, text } = isNegated(actual == null, "not to ");
            if (val) {
                throw Error(`expected value to ${text}exist but got ${actual}`);
            }
        },
        toBe(expected: unknown) {
            const { val, text } = isNegated(actual !== expected, "not ");
            if (val) {
                throw Error(`expected ${format(actual)} to ${text}be ${format(expected)}`);
            }
        }
    }
}
