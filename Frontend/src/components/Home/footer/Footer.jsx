import Total from './Elements/Total_rooms/Total'
import "./Footer.css"
import Total_bookings from './Elements/Total_bookings/Total_bookings'
import Happy from './Elements/Review/Happy'
import Staff from './Elements/Staff/Staff'
const Footer = () => {
  return (
    <div className="Footer_Main">
        <Total />
        <Total_bookings />
        <Happy />
        <Staff />
    </div>
  )
}

export default Footer
