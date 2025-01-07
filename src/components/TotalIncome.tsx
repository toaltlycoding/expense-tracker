
const TotalIncome = ({items}) => {
    //calculat total by taking sum of all item amounts
    const total = items.reduce((sum, item) => {
    const numericValue = parseFloat(item.amount.replace(/[$,]/g, '')) || 0;
    return sum + numericValue;
}, 0);

const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
}).format(total);

return (
    <div className = 'total-income'>
        <h3> Total Income: {formattedTotal} </h3>
    </div>
);
};

export default TotalIncome;