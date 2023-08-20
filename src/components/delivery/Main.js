import React from "react";
import image from "../../img/arrow-del.png";

export default function Main() {
  return (
    <div className="delivery-main">
      <div className="container">
        <img src={image} className="delivery-image-arrow" />
        <h2 className="delivery-h2">Delivery & payment</h2>
        <p className="delivery-main-header">
          Since this is not a real online store, I attach instructions written
          by artificial intelligence:
        </p>
        <div className="delivery-main-wrapper">
          <div className="delivery-main-wrapper__first">
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">1.</div>
              <div className="delivery-item__text">
                Select the vinyl records you wish to purchase: Browse through
                our online store and add the desired vinyl records to your
                shopping cart.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">2.</div>
              <div className="delivery-item__text">
                Review your order: Double-check the vinyl records in your
                shopping cart to ensure accuracy.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">3.</div>
              <div className="delivery-item__text">
                Provide shipping details: Fill in the required information,
                including your full name, shipping address, contact number, and
                email address. This information will be used to deliver your
                vinyl records.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">4.</div>
              <div className="delivery-item__text">
                Choose a delivery option: Select your preferred delivery method
                from the available options. We offer standard shipping, express
                shipping, and local pickup (if available in your area).
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">5.</div>
              <div className="delivery-item__text">
                Calculate shipping costs: The shipping costs will be
                automatically calculated based on your location and chosen
                delivery method. The total cost, including shipping charges,
                will be displayed before proceeding to payment.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">6.</div>
              <div className="delivery-item__text">
                Select payment method: Choose your preferred payment method to
                complete the purchase. We accept various payment options, such
                as credit/debit cards, PayPal, and online banking
                transfers.Select payment method: Choose your preferred payment
                method to complete the purchase. We accept various payment
                options, such as credit/debit cards, PayPal, and online banking
                transfers.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">7.</div>
              <div className="delivery-item__text">
                Enter payment details: Provide the required payment details
                based on your chosen payment method. Ensure the accuracy of the
                entered information to avoid any payment processing issues.
              </div>
            </div>
          </div>
          <div className="delivery-main-wrapper__second">
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">8.</div>
              <div className="delivery-item__text">
                Review the order summary: Carefully review the order summary,
                which includes the vinyl records, shipping details, and payment
                information. Make any necessary changes or additions before
                finalizing the purchase.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">9.</div>
              <div className="delivery-item__text">
                Confirm and place the order: Once you have reviewed all the
                details and are satisfied with your order, click on the "Confirm
                Order" or "Place Order" button to proceed.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">10.</div>
              <div className="delivery-item__text">
                Receive confirmation: After placing the order, you will receive
                an order confirmation via email, which will include the details
                of your purchase, payment, and estimated delivery date.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">11.</div>
              <div className="delivery-item__text">
                Track your shipment: If applicable, track your vinyl record
                shipment by using the tracking information provided in the order
                confirmation email. This will help you stay updated on the
                status and location of your delivery.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">12.</div>
              <div className="delivery-item__text">
                Delivery: Based on the estimated delivery date, expect to
                receive your vinyl records at the provided shipping address.
                Ensure someone is available to receive the package.
              </div>
            </div>
            <div className="delivery-item-wrapper">
              <div className="delivery-item__number">13.</div>
              <div className="delivery-item__text">
                Enjoy your vinyl records: Once the delivery is complete, unpack
                your vinyl records, inspect them for any damage, and enjoy the
                authentic sound and experience of your newly acquired music.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
