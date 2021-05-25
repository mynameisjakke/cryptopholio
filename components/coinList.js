export default function CoinList(params) {
  return(
    <div className="card card-sm card-list">
      <div className="card-title card-title-left">
        <h5>Dina valutor</h5>
      </div>
      <div className="card-data">
        <table>
          <tr>
            <th>Valuta</th>
            <th>Inköp</th>
            <th>Vinnst</th>
          </tr>
          <tr>
            <td>BTC</td>
            <td>7 381kr</td>
            <td>1 520kr</td>
          </tr>
          <tr>
            <td>ETH</td>
            <td>2 930kr</td>
            <td>3 492</td>
          </tr>
          <tr>
            <td>ADA</td>
            <td>1 897kr</td>
            <td>-349kr</td>
          </tr>
          <tr>
            <td>DOT</td>
            <td>826kr</td>
            <td>196kr</td>
          </tr>
          <tr>
            <td>TRON</td>
            <td>208kr</td>
            <td>400kr</td>
          </tr>
          <tr>
            <td>COMP</td>
            <td>98kr</td>
            <td>-29kr</td>
          </tr>
          <tr>
            <td>DOGE</td>
            <td>47kr</td>
            <td>193kr</td>
          </tr>
          <tr>
            <td>POLY</td>
            <td>509kr</td>
            <td>-498kr</td>
          </tr>
        </table>
      </div>
    </div>
  )
};
