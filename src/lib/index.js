// place files you want to import through the `$lib` alias in this folder.

/**
 * @param {string} version1
 * @param {string} version2
 */
export function sameMajorVersion(version1, version2) {
	if (!version1 || !version2) {
		return false;
	}
	const [major1] = version1.split('.');
	const [major2] = version2.split('.');

	return major1 === major2;
}
