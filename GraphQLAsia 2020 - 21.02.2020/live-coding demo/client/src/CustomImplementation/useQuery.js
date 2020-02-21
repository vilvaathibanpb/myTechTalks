import { useContext, useReducer, useRef } from "react";
import { getApolloContext } from "react-apollo";
import { QueryMethods } from "./QueryMethods";
import { useDeepMemo } from "../Components/utils/useDeepMemo";

export const useQuery = (query, options) => {
    const context = useContext(getApolloContext());
    const updatedOptions = options ? { ...options, query } : {query};
    const [next, forceUpdate] = useReducer(x => x+1, 0);

    const queryRef = useRef();
    if(!queryRef.current) {
        queryRef.current = new QueryMethods({
            options: updatedOptions,
            context,
            forceUpdate
        })
    }

    const queryData = queryRef.current;
    queryData.context = context;
    queryData.options = updatedOptions;

    const memo = {
        options: updatedOptions,
        context,
        next
    }

    const result = useDeepMemo(
        () => queryData.execute(),
        memo
    )

    return result;
}