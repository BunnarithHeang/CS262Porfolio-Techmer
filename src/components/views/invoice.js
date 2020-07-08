import React from 'react';

export default function Invoice(props) {
  return (
    <React.Fragment>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="card">
                        <h2>Invoice</h2><h3 class="pull-right">Order</h3>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-xs-6">
                            <address>
                            <strong>From</strong><br />
                                TechFinder<br />
                                company@gmail.com
                            </address>
                        </div>
                        <div class="col-xs-6 text-right">
                            <address>
                            <strong>Shipped To:</strong><br />
                                Jane Smith<br />
                                phone : 0922XXXXx<br />
                                Jsmith@gmail.com<br />
                                address: str 598 
                            </address>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6">
                            <address>
                                <strong>Payment Method:</strong><br />
                                Visa ending **** 4242<br />
                            </address>
                        </div>
                        <div class="col-xs-6 text-right">
                            <address>
                                <strong>Order Date:</strong><br />
                                March 7, 2014<br /><br />
                            </address>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title"><strong>Order summary</strong></h3>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-condensed">
                                    <thead>
                                        <tr>
                                            <td><strong>Item</strong></td>
                                            <td class="text-center"><strong>Price</strong></td>
                                            <td class="text-center"><strong>Quantity</strong></td>
                                            <td class="text-right"><strong>Totals</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>BS-200</td>
                                            <td class="text-center">$10.99</td>
                                            <td class="text-center">1</td>
                                            <td class="text-right">$10.99</td>
                                        </tr>
                                        <tr>
                                            <td>BS-400</td>
                                            <td class="text-center"></td>
                                            <td class="text-center">3</td>
                                            <td class="text-right">$60.00</td>
                                        </tr>
                                        <tr>
                                            <td>BS-1000</td>
                                            <td class="text-center">$600.00</td>
                                            <td class="text-center">1</td>
                                            <td class="text-right">$600.00</td>
                                        </tr>
                                        <tr>
                                            <td class="thick-line"></td>
                                            <td class="thick-line"></td>
                                            <td class="thick-line text-center"><strong>Subtotal</strong></td>
                                            <td class="thick-line text-right">$670.99</td>
                                        </tr>
                                        <tr>
                                            <td class="no-line"></td>
                                            <td class="no-line"></td>
                                            <td class="no-line text-center"><strong>Shipping</strong></td>
                                            <td class="no-line text-right">$15</td>
                                        </tr>
                                        <tr>
                                            <td class="no-line"></td>
                                            <td class="no-line"></td>
                                            <td class="no-line text-center"><strong>Total</strong></td>
                                            <td class="no-line text-right">$685.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
}