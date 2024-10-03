import Image from 'next/image';
import { Modal } from './Modal';
import DonationProgress from './DonationProgress';
import { Funding } from './Funding';

type FundModalProps = {
  count: number;
  amount: number;
  goal: number;
  mission: string;
  triggerClassName?: string;
  dict: any;
};

const FundModal: React.FC<FundModalProps> = ({
  count,
  amount,
  goal,
  mission,
  triggerClassName,
  dict
}) => {
  return (
    <Modal.Root
      triggerText={dict.projectDetails.fundingCard.fundThem}
      triggerClassName={triggerClassName}
    >
      <Modal.Content className="text-center p-8 bg-cream rounded-md">
        <h1 className="text-5xl mb-4">{dict.landing.featured.mission}</h1>
        <div className="flex flex-col items-center md:flex-row mb-6">
          <Image
            className="w-24 md:w-56 mr-2 mb-4 md:mb-0"
            src="/logo.png"
            alt="image"
            width={100}
            height={100}
          />
          <p className="text-left ml-4">{mission}</p>
        </div>
        <DonationProgress
          amount={amount}
          count={count}
          goal={goal}
          dict={dict}
        />
        <div className="px-1 md:px-14">
          <h3 className="text-2xl md:text-3xl mb-2">
            {dict.projectDetails.fundingCard.beAPatron}
          </h3>
          <Funding.AmountSelector
            dict={dict}
            className="grid grid-cols-2 gap-4 mb-3"
          />
        </div>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FundModal;
