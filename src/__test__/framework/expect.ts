type Expect = {
    not?: Expect,
    fn?: FnCall,
    toExist: () => void,
    toBe: (expected: unknown) => void,
}

type FnCall = {
    toThrow: (message: string) => void,
};

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
        ...(typeof actual === "function" && {fn: fnCall(actual)}),
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
        },
    };
}

function fnCall(fn: Function): FnCall {
    return {
        toThrow: (message: string) => {
            let messageThrowed = "";
            try {
                fn();
            } catch(e) {
                if (e instanceof Error) {
                    if (e.message === message) {
                        return;
                    } else {
                        messageThrowed = e.message;
                    }
                }
            }

            const mt = messageThrowed.length ? ` but got "${messageThrowed}"` : "";
            throw Error(`expected error with "${message}" message${mt}`);
        }
    }
}
