// RoomTableHeader.jsx
import "./RoomTableHeader.css";

const RoomTableHeader = () => {
  return (
    <thead>
      <tr className="table-header">
        <th>Room</th>
        <th>Type</th>
        <th>Price / Night</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

export default RoomTableHeader;
