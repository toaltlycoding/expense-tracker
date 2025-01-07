
const TotalBalance = ({totalIncome, totalExpense}) => {
    const balance = totalIncome - totalExpense;

    const formattedBalance = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD",
    }).format(balance);

    return (
        <div className = "balance-container">
            <h3>Balance: {formattedBalance}</h3>
        </div>
    );
};

export default TotalBalance;