import Markdown from 'react-markdown';
import { Modal } from './Modal';
import { Funding } from './Funding';
import { ProjectProps } from '../types';
import ReactMarkdown from 'react-markdown';

type FundModalProps = {
  project: ProjectProps;

  triggerClassName?: string;
  dict: any;
};

const FundModal: React.FC<FundModalProps> = ({
  project,
  triggerClassName,
  dict
}) => {
  const { ownersPicture, projectTranslations } = project;
  const { mission } = projectTranslations[0];
  return (
    <Modal.Root
      triggerText={dict.projectDetails.fundingCard.fundThem}
      triggerClassName={triggerClassName}
    >
      <Modal.Content className="text-center px-2 py-4 sm:p-8 bg-cream rounded-md">
        <h1 className="text-3xl sm:text-5xl mb-2 sm:mb-4">{dict.projectDetails.fundingCard.beAPatron}</h1>
        <div className="hidden sm:flex items-center mb-6">
          <img
            className="min-w-24 min-h-24 max-w-24 max-h-24 object-cover mr-2 mb-4 md:mb-0 shadow-md"
            src={ownersPicture}
            alt="image"
          />
          <Markdown className=" text-left ml-4">{mission}</Markdown>
        </div>
        <div>
          <h2 className='hidden sm:block text-xl sm:text-3xl'>{dict.fundModal.benefitTitle}</h2>
          <ReactMarkdown className="text-left mb-3 prose-strong:text-coralBlue prose-strong:font-normal">
            {dict.fundModal.benefitDescription}
          </ReactMarkdown>
          <p className="text-left mb-6">{dict.fundModal.donatorNaming}</p>
        </div>
        <Funding.AmountSelector
          dict={dict}
          className="grid grid-cols-2 gap-4 mb-3"
        />
      </Modal.Content>
    </Modal.Root>
  );
};

export default FundModal;
