import Modal from 'antd/lib/modal';
import type {FC} from 'react';
import React from 'react';

const NoLicenseComponent: FC = (): JSX.Element => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const onClose = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <Modal
      open={isVisible}
      title="Invalid license"
      closable={true}
      closeIcon={null}
      onOk={onClose}
      onCancel={onClose}>
      <div className="d-flex flex-column justify-content-center align-items-start">
        <p>You don't have a valid license to use this extension.</p>

        <p>
          Please contact administrator for your license or remove the extension
          from your browser!
        </p>

        <p>
          <a
            target="_blank"
            href={chrome.runtime.getURL('assets/thanhtunguet-qr-jira.png')}>
            Open QR Code
          </a>
        </p>
      </div>
    </Modal>
  );
};

export default NoLicenseComponent;
