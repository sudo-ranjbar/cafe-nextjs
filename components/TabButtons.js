export default function TabButtons({ petData, setActiveTab, activeTab }) {
    return (
        <div className="tab__header">
            {petData.map((item, index) => (
                <li
                    className={`${index === activeTab && "active"} tab__button`}
                    key={item.animal}
                    onClick={()=> setActiveTab(index)}
                >
                    {item.animal}
                </li>
            ))}
        </div>
    );
}