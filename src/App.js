import React from 'react';
import bdbLogo from './images/bdb.png';
import configureWeb3Code from './images/configureWeb3Code.png';
import './App.css';
import {configureWeb3} from "./blockchain-helper";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      web3: null,
      connectedAccounts: [],
      selectedAddress: '',
      fromAddress: '',
      addressToGetBalance: '',
      amountToSendInEther: '',
      valueInWei: '',
      valueInEther: '',
      toAddress: '',
      amount: '',
      contractAddress: '',
      contractABI: '',

      addressToGetBalanceDone: false,
      amountToSendInEtherDone: false,
      amountToSendInWeiDone: false,
      utilsDone: false,
      initSmartContractDone: false
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <main>
            <div className="py-5 text-center">
                <div>
                    <img className="mx-auto mb-4" src={bdbLogo} alt="" width="180" height="96"/>
                </div>
                <h2>Web3.js Playground</h2>
            </div>

            <div className="row g-5">
              <div className="col-md-12">
                <h4 className="mb-3">Functions (open your browser console for the results)</h4>
                
                {/* Web3 initialization */}
                <div>
                  <code>
                    [Initialize Web3, before anything else, let's use a custom function for this one]
                    <br/>
                    window.web3 = configureWeb3();
                    <br/>
                    <img src={configureWeb3Code} alt=""/>
                    <button
                        className={"submit btn btn-flat btn-primary float-end " + (!this.state.web3 ? '' : 'disabled')}
                        type="button"
                        onClick={async () => {
                            // let's expose web3 to the browser
                            window.web3 = configureWeb3();
                            console.log("Web3 object created, type window.web3 in the console");
                            console.log("==========");
                            this.setState({'web3':window.web3});
                        }}
                    >Run
                    </button>
                  </code>
                </div>
                <hr/>

                {/* Request accounts function */}

                {/* Show selected address function */}

                {/* Get eth balance function */}

                {/* Convert wei to ether function */}

                {/* Convert ether to wei function */}

                {/* Show Web3 utilities function */}

                {/* Initialize a smart contract function */}

                {/* Send a transaction function */}

              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default App;
