
function App() {
  return (
    <main className="bg-gray-200">
       <header className="bg-gray-300 h-150 border-b-1 border-gray-400">
         <h1 className="text-7xl pt-30 text-center font-bold">SEAWAY</h1>
           <p className="text-s0m font-bold opacity-60 text-center">Shipping to the world, and beyond...</p>
           <div className="flex gap-2 flex-start ml-2 mt-70 font-bold">
           <p className="text-sm">120+ Countries</p>
           <p className="text-sm">5M+ Tons Shipped</p>
           <p className="text-sm">500+ Trusted Customers</p>
       </div>
       </header>
        <h1 className="font-bold text-center mt-10 text-6xl">SEAWAY</h1>
        <p className="text-center text-xs font-bold opacity-60 mb-10">Shipping to the world, and beyond...</p>
        <p className="mx-40 text-center text-justify font-bold opacity-70">At Seaway, we provide dependable sea cargo shipping solutions that connect businesses, suppliers, and customers
          across international markets. From containerised shipments to bulk cargo transportation, we help move goods across
          the oceans with a focus on safety, efficiency, and reliable services. Whether you are shipping commerical goods, industrial equipments, raw materials, or personaal cargo, our team is 
          committed to making your shipping experience straighforward and organised.
        </p>
        <div className="flex gap-2 justify-evenly mx-40 mt-5">
        <button className="py-1 px-3 text-nowrap bg-blue-500 rounded-2xl text-white font-bold">Get a Shipping Quote</button>
        <button className="border-2 text-nowrap font-bold border-blue-500 px-3 opacity-70 py-1 rounded-2xl">Explore Our Services</button>
        </div>
        <section>
          <h2 className="font-bold text-center text-4xl mt-15">Who We Are</h2>
          <p className="text-center font-bold text-xs mb-5">Your Trusted Partner in Sea Cargo Transportation</p>
          <p className="mx-40 text-center text-justify font-bold opacity-70">Seaway is a sea cargo shipping company focused on helping businesses and individuals transport goods across 
            international waters. Shipping is more than moving cargo from one port to another, it is about protecting valuable 
            goods, meeting business schedules, managing logistics, and maintaining the flow of global trade.
            Our approach combines professional coordination, practical shipping solutions, and customer-focused service to support 
            cargo movements from the point of origin to the destination port.
            From small commercial consignments to large container shipments, we aim to mae cargo transportation more convenient, 
            transparent, and dependable.
          </p>
          <button className="py-1 px-3  bg-blue-500 rounded-2xl text-white text-gray-300 font-bold">Learn More About Us</button>
        </section>
        <section>
          <h2 className="text-4xl font-bold text-center">Our Shipping Procedures</h2>
          <div>
            <p className="ml-40 text-2xl font-bold text-left">Sea Freight Shipping:</p>
            <p className="mx-40 text-center text-justify font-bold opacity-70">We coordinate ocean freight trasportation for businesses and individuals shipping
              goods between international ports.
            </p>
            <p className="ml-40 text-2xl font-bold text-left">Full Container Load (FCL):</p>
            <p className="mx-40 text-center text-justify font-bold opacity-70">Our FCL shipping solutions are suitable for customers who need an entire shipping
              container for their cargo.
            </p>
            <p className="ml-40 text-2xl font-bold text-left">Less Than Container Load (LCL)</p>
            <p className="mx-40 text-center text-justify font-bold opacity-70">For smaller shipments that do not reqire a full container, LCL shipping allows compatible
              consignments to share container space, subject to availability and cargo requirements.
            </p>
            <p className="ml-40 text-2xl font-bold text-left">Commercial Cargo Transportation</p>
            <p className="mx-40 text-center text-justify font-bold opacity-70">We support the movement of merchandise, manufactured products, raw materials, and other commercial goods</p>
            <p className="">Port-to-Port Shipping</p>
            <p>
              We coordinate cargo ransportation between desgin departure and destination ports.
            </p>
            <p>Shipping & Logistics Coordination</p>
            <p>We assist with shipment scheduling, cargo documentation, and communication with relevant shipping and 
              logistics partners.
            </p>
            <button>View All our Services</button>
          </div>
        </section>
        <section>
          <h2 classNmae="font-bold text-center text-4xl mt-15">Why Choose Seaway</h2>
          <p>Relaible Coordination</p>
          <p>We work to organise shipment efficently and keep customers informed and satisified.</p>
          <p>Cargo Safety</p>
          <p>We promote appropriate cargo handling, packaging, and docmentation practices.</p>
          <p>Flexible Shipping Options</p>
          <p>We help customers identitfy suitable shipping arrangements for their cargo.</p>
          <p>Clear Communication</p>
          <p>We aim to provide useful shipment updates and responsive customer support.</p>
          <p>Business-Focused Solutions</p>
          <p>We understand the importance of shipping to supply chains, trades and business growth.</p>
          <p>Global Connectivity</p>
          <p>We support international cargo movements through shipping routes and logistics partnerships, subject to service avaiJlability.</p>
          </section>
          <section>
            <h1 className="font-bold text-center text-4xl mt-15">Do You Need Our Services</h1>
            <p>Step 1: Request a Quote</p>
            <p>Step 2: Recieve a Shipping Plan</p>
            <p>Step 3:Prepare Your Cargo</p>
            <p>Step 4:Arrival and Delivery Coordination</p>
            <p>Reay to Ship with Us?</p>
            <p>Let us help you plan your next cargo shipment with confidence.</p>
            <p>Whether you are moving goods for your business or arranging an interational shipment,
               Seaway is ready to help you.
            </p>
            <button className="">Request a Quote</button>
            <button className="">Contact Our Team</button>
          </section>
    </main>
  )
}
export default App;