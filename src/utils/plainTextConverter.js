export const plainTextConverter = (originalText) => {
    const plain = originalText.replace(/<[^>]+>/g, '');

    return plain;
}