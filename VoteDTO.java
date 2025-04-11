package com.example.fit4fit.DTO;


public class VoteDTO {

    private String userIdentifier;
    private String voteType; // Expected: "like" or "dislike"

    public VoteDTO() {
    }

    public VoteDTO(String userIdentifier, String voteType) {
        this.userIdentifier = userIdentifier;
        this.voteType = voteType;
    }

    // Getters and setters

    public String getUserIdentifier() {
        return userIdentifier;
    }

    public void setUserIdentifier(String userIdentifier) { 
        this.userIdentifier = userIdentifier; 
    }

    public String getVoteType() {
        return voteType;
    }

    public void setVoteType(String voteType) { 
        this.voteType = voteType; 
    }
}
