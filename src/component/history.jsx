import React from "react";
import cart from "./images/cart.jpg"
import post from './images/post.jpg';
import debit from './images/debit.jpg'
import lastie from './images/last-img.jpg'
import '../App.css'
import './history.css'


const History = () => {

  const currency = "$";


 const transactions = [
  {
    name: "Ticketmaster",
    image: debit,
    amount: 123,
    time: "1 day ago",
    state: "-"
  }, 
  {
    name: "Ticketmaster",
    image: debit,
    amount: 86,
    time: "1 day ago",
    state: "-"
  }, 
  {
    name: "Ticketmaster",
    image: debit,
    amount: 86,
    time: "1 day ago",
    state: "-"
  },
  {
    name: "Ticketmaster",
    image: debit,
    amount: 50,
    time: "1 day ago",
    state: "-"
  }
 ]

  document.querySelector('meta[name="theme-color"]').content = '#fff'

  return (
    <body>
      <div style={{ background: "white", position: "sticky", top: "0" }} >
        <img src={post} alt="" className="head-cont" />
      </div>

      <section>
        <div className="header-cont">
          <h3>Checking Account</h3>
          <div className="histoory_balance">
            <div>
            <p>$</p>
            <p>7</p>
            <p>28</p>
            </div>
          </div>
        </div>
      {transactions.map((transaction, index) => (
                <div className="transactions" key={index}>
                <div className="transaction-img-cont">
                <img src={transaction.image} alt="" className="image"/>
                <div>
                  <p>{transaction.name}</p>
                  <p className="p-time">{transaction.time}</p>
                  </div>
                </div>
                <p style={transaction.state === "+" ? {color: "green"} : {color: "black"}}>{transaction.state}{transaction.amount}</p>
              </div>
      ))}


        <hr className="hoorizontal-rule"/>
        <div className="unclickabe-link">
          <p>View Transactions</p>
          <p>font-awe</p>
        </div>

        <div className="second-section">



          {/* start here */}
          <div className="savings-account">
            <p className="first-p">Credit Account</p>
            <div className="flex-div">
             <div>
               <p>$</p>
               <p>13</p>
               <p>28</p>
             </div>
            </div>
            <hr className="horizontal-rule"/>
            <div className="other-account">
             <p>View Savings Account</p>
             <p>font-awe</p>
            </div>
          </div>

          <div className="savings-account">
            <p className="first-p">Savings Account</p>
            <div className="flex-div">
             <div>
               <p>$</p>
               <p>42.67</p>
               <p>28</p>
             </div>
            </div>
            <hr className="horizontal-rule"/>
            <div className="other-account">
             <p>View Savings Account</p>
             <p>font-awe</p>
            </div>
          </div>
          </div>
           

           <footer>
            <img src={lastie} alt="" />
           </footer>
       
      </section>
    </body>
  );
};

export default History;
