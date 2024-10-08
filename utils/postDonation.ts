import { DonationDTOProps } from '@/app/types/Props';
import prisma from '@/lib/prisma';

export const postDonation = async (donationDTO: DonationDTOProps) => {
  return await prisma.donation?.create({
    data: donationDTO
  })
};