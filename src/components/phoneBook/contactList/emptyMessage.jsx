import { IconMessage, Message, MessageWrapper } from './contactList.styled';

export const EmptyMessage = () => {
  const emptyImg =
    'https://www.iconbunny.com/icons/media/catalog/product/4/4/444.1-contacts-icon-iconbunny.jpg';

  return (
    <MessageWrapper>
      <IconMessage src={emptyImg} alt="empty contacts" width={200} />
      <Message>Your contact list is empty.Try add some contacts</Message>
    </MessageWrapper>
  );
};
