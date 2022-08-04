import './Account.css'


/**
 * AccountSection properties
 * 
 * @typedef { Object } AccountSectionProps
 * @prop { Object } account - keyData from the user's global data
 * @prop { String } account.title - title of the account
 * @prop { Integer } account.numberInTitle
 * @prop { Number } account.amount - amount on the account
 * @prop { String } account.amountDescription - description of the account's amount
 */
/**
 * React component: AccountSection
 * 
 * @type { React.FC<AccountSectionProps> }
 * @returns { React.ReactElement }
 */
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