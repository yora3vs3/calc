function testRegex() {
    const regexPattern = document.getElementById('regexInput').value;
    const testString = document.getElementById('testString').value;
    const regex = new RegExp(regexPattern, 'g');
    const results = document.getElementById('results');
    results.innerHTML = '';

    let match;
    let lastIndex = 0;

    while ((match = regex.exec(testString)) !== null) {
        if (match.index > lastIndex) {
            results.innerHTML += '<span class="no-match">' + testString.substring(lastIndex, match.index) + '</span>';
        }

        results.innerHTML += '<span class="match">' + match[0] + '</span>';
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < testString.length) {
        results.innerHTML += '<span class="no-match">' + testString.substring(lastIndex) + '</span>';
    }
}

document.getElementById('testButton').addEventListener('click', testRegex);
