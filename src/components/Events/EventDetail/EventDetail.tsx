import React from 'react'
import { useFetchEventQuery } from '../../../redux-toolkit/features/rtk-query/events/event-slice'

const EventDetail: React.FC<{id: number}> = ({id}) => {
  const _id: string = id.toString();
  const {data , isSuccess} = useFetchEventQuery(_id);
  return (
    <div>{isSuccess && <div>{JSON.stringify(data)}</div>}</div>
  )
};

export default EventDetail;