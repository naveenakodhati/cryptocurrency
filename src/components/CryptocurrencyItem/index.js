// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyLogoUrl, currencyName, euroValue, usdValue} = currencyData
  return (
    <div className="item-container">
      <div className="display-container">
        <img className="icon" src={currencyLogoUrl} alt={currencyName} />
        <p className="item-heading">{currencyName}</p>
      </div>
      <div className="display-container-1">
        <p className="item-description">{usdValue}</p>
        <p className="item-description">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
