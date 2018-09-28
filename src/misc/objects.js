export function update(dict1, dict2) {
    const res = {};

    for (let key in dict1) {
        res[key] = dict1[key];
    }

    for (let key in dict2) {
        res[key] = dict2[key];
    }

    return res;
}