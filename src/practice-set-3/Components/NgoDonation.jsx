import React from 'react'

export const NgoDonation = ({ DonationData }) => {
  const totalDonation = DonationData.reduce((acc, { Donation }) => acc + Donation, 0);
  return (
    <h1>Total Donation Collected: INR {totalDonation}</h1>
  )
}
