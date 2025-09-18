import React from "react";

export default class App extends React.Component {
  state = {
    cart: {
      items: [
        //{name:'Laptop',price:1200,quantity:1},
        //{name:'Headphone',price:200,quantity:1}
      ]
    },
    nev: null,
    ar: 0,
    meny: null,
  }

  handleButtonClick = e => {
    e.preventDefault();

    console.log('Button clicked!', this.state);
    if (this.state.nev && this.state.ar && this.state.ar > 0 && this.state.meny && this.state.meny > 0) {
      this.setState({
        cart: {
          items: [...this.state.cart.items,
            {
              name: this.state.nev,
              price: +this.state.ar,
              quantity: +this.state.meny
            }
          ]
        }})
  } else{
      alert('Hibás adatok!');
  }
}

  render() {
    return(
        <div>
          <form>
            <h1>Termék hozzáadása a kosárhoz</h1>
            <label htmlFor="input_nev">Termék neve</label>
            <input type="text" id="input_nev" name="input_nev" placeholder="Név..." required
            onChange={e => this.setState({nev: e.target.value})}
            /><br />
            <label htmlFor="input_ar">Termék ára</label>
            <input type="number" id="input_ar" name="input_ar" value={this.state.ar}
            onChange={e => this.setState({ar: +e.target.value})}
            /><br />
            <label htmlFor="input_meny">Termék mennyisége</label>
            <input type="text" id="input_meny" name="input_meny" placeholder="Mennyiség..." required
            onChange={e => this.setState({meny: +e.target.value})}
            /><br />
            <input type="button" id="btn_submit" name="btn_submit" value="Hozzáadás a kosárhoz" onClick={this.handleButtonClick}/>
          </form>
          <hr />
          <h3>A kosár tartalma</h3>
          
            {
              this.state.cart.items.length >= 1 
              ? 
              <ul>
                {
                  this.state.cart.items.map( (item, index) => 
                    <li key={index}>{item.name} - {item.price} Ft, Mennyiség: {item.quantity} db</li>  
                  )
                }
              </ul>
              :
               <p>A kosár üres</p>
            }
          
        </div>
    );
  }
}