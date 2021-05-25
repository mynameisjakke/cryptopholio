import Link from 'next/link'

export default function SettingsComp(params) {
  return(
    <div className="card card-lg">
      <div className="card-title">
        <h3>API Inställningar</h3>
      </div>
      <div className="card-data">
        <p>
          Vänligen fyll i informationen nedan så att vi kan använda datan nedan från Coinbase.
          Vet du inte hur du går till väga så följ <Link href="/"><a> denna guide.</a></Link>
          <br />
          <br />
          <em>Vi uppdaterar kompatibla API:er hela tiden så titta in igen snart för att se om vi är kompatibel med någon annan Exchange då!</em>
        </p>
        <div className="card-form">
          <form>
            <div className="form-control">
              <input type="password" placeholder="Vänligen fyll i API nyckel här" />
            </div>
            <div className="form-control">
              <button type="submit">Spara</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
