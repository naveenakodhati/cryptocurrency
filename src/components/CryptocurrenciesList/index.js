// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: '', isLoading: true}

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogoUrl: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="card-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              className="currency-image"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="Cryptocurrency Tracker"
            />
            <div className="adjust-currency-list">
              <div className="bg-container">
                <h1 className="currencies-title">Coin Type</h1>
                <div className="heading-container">
                  <p className="currencies-description">USD</p>
                  <p className="currencies-description">EURO</p>
                </div>
              </div>
              {currencyList.map(eachObj => (
                <CryptocurrencyItem currencyData={eachObj} key={eachObj.id} />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default CryptocurrenciesList
