"use client";
import { UserData } from "@/types/user-data";
import axiosInstance from "../axios-instance";

export const createUserMutation = async (newUser: UserData) => {
	try {
		const response = await axiosInstance.post("/auth/register", newUser);
		if (!response.data) {
			throw new Error("Network response was not ok");
		}
		return response.data;
	} catch (error) {
		throw new Error("User already exist");
	}
};
