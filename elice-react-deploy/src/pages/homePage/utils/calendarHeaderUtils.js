export function paintMonth(month, year) {
    const [highlightWord, rest] = [month.slice(0, 3), month.slice(3)];
    return (
        <>
            <p>
                <span className="highlight_month">{highlightWord}</span>
                <span>{rest}</span>
            </p>
            <p>{year}</p>
        </>
    );
}
