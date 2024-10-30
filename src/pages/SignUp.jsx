import React, { useState } from 'react'
import { Button, Modal, Space } from 'antd';

function SignUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>

        <div className="container">
          <div className="signup">
          <Button style={{width: '300px', height:'40px'}} type="primary" onClick={showModal}>
        Ro'yxatdan o'tish
      </Button>
          <Modal style={{flexDirection: 'column', display: 'flex'}} title="Ro'yxatdan o'tish" open={isModalOpen} onOk={handleOk} cancelText="Bekor Qilish" okText="Ro'yxatdan o'tish" onCancel={handleCancel}>
      <Space direction='vertical' >
      <input className='input' type="text" placeholder='Ism Familiya kiriting' />
      <input className='input' type="tel" placeholder='Telefon raqam kiriting'/>
      </Space>
      </Modal>

          </div>
        </div>
    </>
  )
}

export default SignUp