import React from 'react'

function App() {
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 className="card-price text-center">$0/month</h6>
            <hr/>
            <ul className="fa-ul">
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Single
               User<br></br>
               <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>50GB Storage<br></br>
               <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Unlimited Public Projects<br></br>
               <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Community Access<br></br>         
              <img src="close.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span><span className="text-muted">Unlimited
                Private Projects</span><br></br>
              <img src="close.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span className="text-muted"  id="right-align-span"><i className="fas fa-times"></i></span><span className="text-muted">Dedicated
                Phone Support</span><br></br>
              <img src="close.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span className="text-muted"  id="right-align-span"><i className="fas fa-times"></i></span><span className="text-muted">Free Subdomain
                </span><br></br>
              <img src="close.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span className="text-muted"  id="right-align-span"><i className="fas fa-times"></i></span><span className="text-muted">Monthly
                Status Reports</span><br></br>
                </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Plus Tier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9/month</h6>
            <hr/>
            <ul className="fa-ul">
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>5 Users<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>50GB Storage<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Unlimited Public Projects<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Community Access<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Unlimited Private Project<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Dedicated Phone Support<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Free Subdomain<br></br>
              <img src="close.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span className="text-muted"  id="right-align-span"><i className="fas fa-times"></i></span><span className="text-muted">Monthly
                Status Reports</span><br></br>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pro Tier --> */}
      <div className="col-lg-4">
        
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49/month</h6>
            <hr/>
            <ul className="fa-ul">
            
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Unlimited Users<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>50GB Storage<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Unlimited Public Projects<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Community Access<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Unlimited Private Project<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Dedicated Phone Support<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Free Subdomain<br></br>
            <img src="tick.png" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"></img><span  id="right-align-span"><i className="fas fa-times"></i></span>Monthly Status Reports<br></br>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  
  </>
}

export default App
