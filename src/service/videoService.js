import videoRepository from "../repository/videoRepository.js";

const findAll = async () => {
    return await videoRepository.findAll();
}

export default {findAll}