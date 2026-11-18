import './Stats.css';

function Stats(){
    return(
        <section className='stats-section'>
            <div className="stats-conatiner">
                <div className="stat-item">
                    <img src='/nerdwallet.svg' alt='Nerdwallet' className='stat-logo'/>
                </div>
                <div className="stat-item">
                    <img src="/investopia.svg" alt="Investopedia" className="stat-logo" />
                </div>
                <div className="stat-item">
                    <img src='/clients.svg' alt='450K+' className='stat-logo'/>
                </div>
                <div className="stat-item">
                    <img src='/funds.svg' alt='client funds' className='stats-logo'/>

                </div>
                <div className="stat-item">
                    <img src='/appstore.svg' alt='apple store' className='stat-logo'/>
                </div>
            </div>
        </section>
    );
}
export default Stats;