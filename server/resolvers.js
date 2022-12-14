import { Job } from "./db.js";
import { Company } from "./db.js";
export const resolvers = {
    Query: {
        job : (_root, {id}) => {return Job.findById(id);},
        company : (_root, {id}) => {return Company.findById(id)},
        jobs : async () => Job.findAll(),
    },

    Mutation: {
        createJob : (_root, {input}) => Job.create(input),
        deleteJob : (_root, {id}) => Job.delete(id),
        updateJob : (_root, {input}) => Job.update(input),
    },

    Job: {
        company : (job) => Company.findById(job.companyId),
    },

    Company: {
        jobs : (company) => Job.findAll((job) => job.companyId === company.id),
    },
};