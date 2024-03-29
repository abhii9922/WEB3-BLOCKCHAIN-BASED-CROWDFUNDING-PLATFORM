import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import FundCard from './FundCard';
import { loader } from '../assets';
import { daysLeft } from '../utils';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const [showExpired, setShowExpired] = useState(false); // State to manage visibility of expired campaigns

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };
  const toggleExpiredVisibility = () => setShowExpired(!showExpired); // Toggle visibility of expired campaigns

  return (
    <div>
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.filter((campaign) => daysLeft(campaign.deadline) > 0 && campaign.amountCollected < campaign.target).length})
      </h1>

      {/* Ongoing Campaigns */}
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {isLoading && <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />}
        {!isLoading && campaigns.length === 0 && (
          <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
            You have not created any campaigns yet.
          </p>
        )}
        {!isLoading && campaigns.map((campaign) => {
          const remainingDays = daysLeft(campaign.deadline);
          if (remainingDays > 0 && campaign.amountCollected < campaign.target) {
            return <FundCard key={uuidv4()} {...campaign} handleClick={() => handleNavigate(campaign)} />;
          }
          return null;
        })}
      </div>
<br></br>
      {/* Footer */}
      <footer>
        <button style={{display:'flex',justifyContent: 'space-between',alignItems: 'center'}} onClick={toggleExpiredVisibility} className="font-epilogue font-semibold text-[18px] text-white text-left">
           Expired Campaigns ({campaigns.filter((campaign) => daysLeft(campaign.deadline) <= 0 || campaign.amountCollected < campaign.target).length})  <span className="shine" style={{ marginLeft: '10px' }}>{ showExpired ? <MdOutlineKeyboardDoubleArrowUp /> : <MdOutlineKeyboardDoubleArrowDown/>} </span>
        </button>
        {showExpired && (
          <>
            
            <div className="flex flex-wrap mt-[20px] gap-[26px]">
              {isLoading && <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />}
              {!isLoading && campaigns.length === 0 && (
                <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
                  No Expired campaigns yet.
                </p>
              )}
              {!isLoading && campaigns.map((campaign) => {
                const remainingDays = daysLeft(campaign.deadline);
                if (remainingDays <= 0 || campaign.amountCollected == campaign.target) {
                  return <FundCard key={uuidv4()} {...campaign} handleClick={() => handleNavigate(campaign)} />;
                }
                return null;
              })}
            </div>
          </>
        )}
      </footer>
    </div>
  );
}

export default DisplayCampaigns;