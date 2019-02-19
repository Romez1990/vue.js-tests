export default function(regex, string) {
	const match = regex.exec(string);
	if (match === null) return false;
	return match[0].length === string.length;
}
