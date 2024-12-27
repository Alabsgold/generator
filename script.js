function generateCode() {
    const format = document.getElementById('formatInput').value;
    let result = '';
    const chars = {
        'A': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'a': 'abcdefghijklmnopqrstuvwxyz',
        '9': '0123456789',
        '*': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    };

    for (let i = 0; i < format.length; i++) {
        const char = format[i];
        if (chars[char]) {
            result += chars[char][Math.floor(Math.random() * chars[char].length)];
        } else {
            result += char; // Keep non-placeholder characters as is
        }
    }

    document.getElementById('output').innerText = result || 'Please enter a format!';
}
