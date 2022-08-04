import './Account.css'

function AccountSection ({ account }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{`${account.title} (x${account.numberInTitle})`}</h3>
                <p className="account-amount">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(account.amount)}</p>
                <p className="account-amount-description">{account.amountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default AccountSection