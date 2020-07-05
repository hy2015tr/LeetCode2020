var partitionLabels = function(S) {

    let parts = [];
    let result = [];

    for(lk = 0; lk < S.length; lk++) {

        let first = S.indexOf(S[lk]);
        let last = S.lastIndexOf(S[lk]);

        for(let li = first; li <= last; li++) {
            let newLast = S.lastIndexOf(S[li]);
            if (newLast > last) last = newLast;
        }

        let part = S.substring(first, last + 1);
        parts.push(part);
        lk = last;
    }

    parts.forEach(x => result.push(x.length));
    return result;
};

// Test Data
const test01 = "ababcbacadefegdehijhklij";
const result = partitionLabels(test01);
console.log(result);